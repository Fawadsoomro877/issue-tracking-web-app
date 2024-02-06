import { Box } from "@radix-ui/themes";
import { Skeleton } from "@/components";
const NewIssueLoadingPage = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton />
      <Skeleton height="15rem" />
      <Skeleton width="5rem" />
    </Box>
  );
};

export default NewIssueLoadingPage;
