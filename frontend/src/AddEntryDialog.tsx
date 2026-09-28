import "./AddEntryDialog.css";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useForm, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type AddEntryDialogProps = {
  onClose: () => void;
  onSave?: (entry: AddEntryFormData) => void;
};

const addEntrySchema = yup.object({
  amount: yup
    .number()
    .typeError("Enter a valid amount")
    .moreThan(0, "Amount must be greater than zero")
    .required("Amount is required"),
  description: yup.string().trim().required("Description is required"),
  date: yup
    .string()
    .required("Choose a date")
    .matches(/^\d{4}-\d{2}-\d{2}$/, "Choose a valid date"),
  type: yup
    .mixed<"expense" | "income">()
    .oneOf(["expense", "income"], "Choose entry type")
    .required("Choose entry type"),
  category: yup
    .number()
    .nullable()
    .when("type", {
      is: "expense",
      then: (schema) => schema.required("Choose a category"),
      otherwise: (schema) => schema.notRequired(),
    }),
  repeat: yup
    .mixed<"never" | "weekly" | "monthly">()
    .oneOf(["never", "weekly", "monthly"])
    .required(),
});

type AddEntryFormData = yup.InferType<typeof addEntrySchema>;

function getTodayDateValue() {
  const today = new Date();
  const localToday = new Date(
    today.getTime() - today.getTimezoneOffset() * 60_000,
  );

  return localToday.toISOString().slice(0, 10);
}

function AddEntryDialog({ onClose, onSave }: AddEntryDialogProps) {
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm<AddEntryFormData>({
    resolver: yupResolver(addEntrySchema),
    defaultValues: {
      date: getTodayDateValue(),
      type: "expense",
      category: 0,
      repeat: "never",
    },
  });
  const selectedType = useWatch({ control, name: "type" });
  const selectedCategory = useWatch({ control, name: "category" });

  const onSubmit = (entry: AddEntryFormData) => {
    onSave?.(entry);
    onClose();
  };

  return (
    <Dialog open onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="add-entry-dialog">
        <DialogHeader className="dialog-head">
          <DialogTitle>add entry</DialogTitle>
          <DialogDescription className="dialog-sub">
            log a new expense or income entry.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div
            className={`type-toggle ${selectedType === "income" ? "type-income" : "type-expense"}`}
            role="group"
            aria-label="entry type"
          >
            <span className="type-slider" aria-hidden="true" />
            <button
              type="button"
              className={`type-btn ${selectedType === "expense" ? "active-expense" : ""}`}
              aria-pressed={selectedType === "expense"}
              onClick={() =>
                setValue("type", "expense", { shouldValidate: true })
              }
            >
              expense
            </button>
            <button
              type="button"
              className={`type-btn ${selectedType === "income" ? "active-income" : ""}`}
              aria-pressed={selectedType === "income"}
              onClick={() => {
                setValue("type", "income", { shouldValidate: true });
                setValue("category", null, { shouldValidate: true });
              }}
            >
              income
            </button>
          </div>

          <div className="field amount-field">
            <label htmlFor="amount">amount</label>
            <div className="prefix-wrap">
              <span className="prefix">$</span>
              <input
                type="number"
                id="amount"
                placeholder="0.00"
                min="0.01"
                step="0.01"
                aria-invalid={Boolean(errors.amount)}
                aria-describedby={errors.amount ? "amount-error" : undefined}
                {...register("amount", { valueAsNumber: true })}
              />
            </div>
            {errors.amount && (
              <p className="field-error" id="amount-error">
                {errors.amount.message}
              </p>
            )}
          </div>

          <div className="field">
            <label htmlFor="desc">description</label>
            <input
              type="text"
              id="desc"
              placeholder="e.g. whole foods"
              aria-invalid={Boolean(errors.description)}
              aria-describedby={
                errors.description ? "description-error" : undefined
              }
              {...register("description")}
            />
            {errors.description && (
              <p className="field-error" id="description-error">
                {errors.description.message}
              </p>
            )}
          </div>

          <div
            className={`category-section ${selectedType === "expense" ? "is-visible" : ""}`}
            aria-hidden={selectedType !== "expense"}
          >
            <div className="category-section-content">
              <div className="field">
                <label>category</label>
                <div className="category-grid">
                  <button
                    type="button"
                    className={`category-chip ${selectedCategory === 0 ? "selected" : ""}`}
                    aria-pressed={selectedCategory === 0}
                    onClick={() =>
                      setValue("category", 0, { shouldValidate: true })
                    }
                  >
                    <div
                      className="icon-circle"
                      style={{
                        background: "var(--sage-bg)",
                        color: "var(--sage-deep)",
                      }}
                    >
                      🛒
                    </div>
                    <span className="label">groceries</span>
                  </button>
                  <button
                    type="button"
                    className={`category-chip ${selectedCategory === 1 ? "selected" : ""}`}
                    aria-pressed={selectedCategory === 1}
                    onClick={() =>
                      setValue("category", 1, { shouldValidate: true })
                    }
                  >
                    <div
                      className="icon-circle"
                      style={{
                        background: "var(--amber-bg)",
                        color: "var(--amber)",
                      }}
                    >
                      ☕
                    </div>
                    <span className="label">dining</span>
                  </button>
                  <button
                    type="button"
                    className={`category-chip ${selectedCategory === 2 ? "selected" : ""}`}
                    aria-pressed={selectedCategory === 2}
                    onClick={() =>
                      setValue("category", 2, { shouldValidate: true })
                    }
                  >
                    <div
                      className="icon-circle"
                      style={{
                        background: "var(--blue-bg)",
                        color: "var(--blue)",
                      }}
                    >
                      🚗
                    </div>
                    <span className="label">transport</span>
                  </button>
                  <button
                    type="button"
                    className={`category-chip ${selectedCategory === 3 ? "selected" : ""}`}
                    aria-pressed={selectedCategory === 3}
                    onClick={() =>
                      setValue("category", 3, { shouldValidate: true })
                    }
                  >
                    <div
                      className="icon-circle"
                      style={{
                        background: "var(--purple-bg)",
                        color: "var(--purple)",
                      }}
                    >
                      🎬
                    </div>
                    <span className="label">fun</span>
                  </button>
                  <button
                    type="button"
                    className={`category-chip ${selectedCategory === 4 ? "selected" : ""}`}
                    aria-pressed={selectedCategory === 4}
                    onClick={() =>
                      setValue("category", 4, { shouldValidate: true })
                    }
                  >
                    <div
                      className="icon-circle"
                      style={{
                        background: "var(--coral-bg)",
                        color: "var(--coral)",
                      }}
                    >
                      🏠
                    </div>
                    <span className="label">home</span>
                  </button>
                  <button
                    type="button"
                    className={`category-chip ${selectedCategory === 5 ? "selected" : ""}`}
                    aria-pressed={selectedCategory === 5}
                    onClick={() =>
                      setValue("category", 5, { shouldValidate: true })
                    }
                  >
                    <div
                      className="icon-circle"
                      style={{
                        background: "var(--sage-bg)",
                        color: "var(--sage-deep)",
                      }}
                    >
                      💊
                    </div>
                    <span className="label">health</span>
                  </button>
                  <button
                    type="button"
                    className={`category-chip ${selectedCategory === 6 ? "selected" : ""}`}
                    aria-pressed={selectedCategory === 6}
                    onClick={() =>
                      setValue("category", 6, { shouldValidate: true })
                    }
                  >
                    <div
                      className="icon-circle"
                      style={{
                        background: "var(--amber-bg)",
                        color: "var(--amber)",
                      }}
                    >
                      📦
                    </div>
                    <span className="label">other</span>
                  </button>
                </div>
                {errors.category && (
                  <p className="field-error">{errors.category.message}</p>
                )}
              </div>
            </div>
          </div>

          <div className="row-2">
            <div className="field">
              <label htmlFor="date">date</label>
              <input
                type="date"
                id="date"
                aria-invalid={Boolean(errors.date)}
                aria-describedby={errors.date ? "date-error" : undefined}
                {...register("date")}
              />
              {errors.date && (
                <p className="field-error" id="date-error">
                  {errors.date.message}
                </p>
              )}
            </div>
            <div className="field">
              <label htmlFor="repeat">repeats</label>
              <select id="repeat" {...register("repeat")}>
                <option value="never">never</option>
                <option value="weekly">weekly</option>
                <option value="monthly">monthly</option>
              </select>
            </div>
          </div>

          <DialogFooter className="dialog-actions">
            <button type="button" className="btn btn-cancel" onClick={onClose}>
              cancel
            </button>
            <button type="submit" className="btn btn-save">
              save entry
            </button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default AddEntryDialog;
