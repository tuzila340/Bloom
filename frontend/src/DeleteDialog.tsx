import "./AddEntryDialog.css";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

function DeleteDialog({ onClose }: { onClose: () => void }) {
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
          <button className="btn btn-outline delete-btn">Delete</button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteDialog;
