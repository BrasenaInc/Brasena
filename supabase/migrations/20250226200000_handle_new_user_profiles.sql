-- Create profile row when a new auth user is created (avoids RLS blocking client insert
-- when email confirmation is required or session is not yet available).

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
  return new;
end;
$$;

comment on function public.handle_new_user() is 'Trigger: insert into public.profiles when auth.users row is created.';

create trigger on_auth_user_created
  after insert on auth.users
  for each row
  execute function public.handle_new_user();
