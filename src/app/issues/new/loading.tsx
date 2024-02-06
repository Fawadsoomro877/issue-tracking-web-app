import ErrorMessage from "@/components/ErrorMessage";
import Spinner from "@/components/Spinner";
import { Callout, TextField, Button, Box } from "@radix-ui/themes";
import { register } from "module";
import error from "next/error";
import React from "react";
import { Controller } from "react-hook-form";
import { MdErrorOutline } from "react-icons/md";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
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
