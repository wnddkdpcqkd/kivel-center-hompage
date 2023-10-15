import TabNavigation from "./components/TabNavigation";

export default function IntroLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="pt-14">
      <TabNavigation />
      {children}
    </div>
  );
}
