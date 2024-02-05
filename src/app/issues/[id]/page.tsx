import { notFound } from "next/navigation";
import React from "react";
import prisma from "../../../../prisma/client";
interface Props {
  params: { id: string };
}

const IssueDetailsPage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  return (
    <div>
      <h1>{issue?.title}</h1>
      <h1>{issue?.description}</h1>
      <h1>{issue?.status}</h1>
    </div>
  );
};

export default IssueDetailsPage;
