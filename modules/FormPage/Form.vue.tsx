import VPage from "../Page/Page.vue";
import IForm from "./IForm";

export default class VForm extends VPage implements IForm{
  saveFormRef(form: any): void {
    throw new Error("Method not implemented.");
  }    onSubmit(actionType: any): void {
    throw new Error("Method not implemented.");
  }
}