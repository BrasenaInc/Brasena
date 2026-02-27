-- Create business_profiles row from auth metadata when profile_type is business.
-- Avoids RLS blocking client insert when session is not yet available (e.g. email confirmation).

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (
    id,
    email,
    full_name,
    phone,
    role,
    profile_type,
    preferred_language
  ) values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'name', new.raw_user_meta_data->>'full_name'),
    new.raw_user_meta_data->>'phone',
    'customer',
    coalesce(
      (new.raw_user_meta_data->>'profile_type')::public.profile_type,
      'residential'
    ),
    coalesce(
      (new.raw_user_meta_data->>'preferred_language')::public.preferred_language,
      'en'
    )
  );

  if (new.raw_user_meta_data->>'profile_type') = 'business' then
    insert into public.business_profiles (
      user_id,
      business_name,
      ein,
      verified
    ) values (
      new.id,
      coalesce(new.raw_user_meta_data->>'business_name', ''),
      coalesce(new.raw_user_meta_data->>'ein', ''),
      false
    );
  end if;

  return new;
end;
$$;

comment on function public.handle_new_user() is 'Trigger: insert into public.profiles and public.business_profiles (when business) on auth.users insert.';
