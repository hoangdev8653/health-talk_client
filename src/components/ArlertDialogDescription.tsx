import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

function ArlertDialogDescription({ children }: { children: React.ReactNode }) {
  return <AlertDialogDescription>{children}</AlertDialogDescription>;
}

export default ArlertDialogDescription;
