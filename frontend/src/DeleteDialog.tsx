import "./AddEntryDialog.css";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

function DeleteDialog({ onClose }: { onClose: () => void }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await axios.delete("http://localhost:5277/deleteUser", {
        withCredentials: true,
      });
      onClose();
      navigate("/");
    } catch (error) {
      console.error("Error deleting user:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <Dialog open onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="add-entry-dialog">
        <DialogHeader className="dialog-head">
          <DialogTitle>Delete Account</DialogTitle>
          <DialogDescription className="dialog-sub">
            Are you sure you want to delete your account? This action cannot be
            undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <button className="btn btn-outline cancel-btn" onClick={onClose}>
            Cancel
          </button>
          <button
            className="btn btn-outline delete-btn"
            onClick={handleDelete}
            disabled={isDeleting}
          >
            {isDeleting ? "Deleting..." : "Delete"}
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteDialog;
