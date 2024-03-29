import { ProjectManageSidebar } from "../../features/projects/manage-sidebar/ui";
import { PageWrapper } from "../../shared/ui/page-wrapper";
import { ManageProjectsTable } from "../../widgets/projectsTable";

export const HomePage = () => {
  return (
    <PageWrapper className="relative overflow-x-hidden">
      <ManageProjectsTable />
      <ProjectManageSidebar />
    </PageWrapper>
  );
};
