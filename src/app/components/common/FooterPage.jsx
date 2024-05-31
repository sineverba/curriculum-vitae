"use client";

import React from "react";
import { GetYearInterval } from "@sineverba/years-interval";
import { useGetVersionsQuery } from "../../features/apiSlice";

export default function FooterPage() {
  const { data } = useGetVersionsQuery();

  return (
    <footer className="text-center mt-8 mb-8">
      <p>
        Frontend v. {process.env.NEXT_PUBLIC_APP_VERSION} - &copy;{" "}
        {GetYearInterval("2022")} -{" "}
        {data?.version && `- Backend v. ${data.version}`} -{" "}
        <a href="https://github.com/sineverba/curriculum-vitae">
          View source on Github
        </a>
      </p>
    </footer>
  );
}
