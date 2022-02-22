import { TemplateItem } from "@/interfaces/template-item.interface";
export const BACK_END_URL = "https://localhost:8000/";
export const PLUS = "+";
export function PLUS_TEMPLATE_ITEM(): TemplateItem {
  return {
    label: "+",
    bucket: [] as string[],
    is_selected: false,
  };
}
