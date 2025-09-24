interface CompanionSessionPageProps {
  params: Promise<{ id: string }>;
}
const CompanionSession = async ({ params }: CompanionSessionPageProps) => {
  const { id } = await params;
  return <div>CompanionSession</div>;
};

export default CompanionSession;
