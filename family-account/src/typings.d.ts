import React from "react";

export interface TabItem {
  key: string;
  title?: string;
  icon?: React.ReactNode;
  path: string;
}
