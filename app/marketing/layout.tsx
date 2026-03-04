export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#0C0F0C] overflow-x-hidden">
      {children}
    </div>
  );
}
