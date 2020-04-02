import VPage from "../Page/Page.vue";
import IForm from "./IForm";

export default abstract class VForm<M extends {}> extends VPage implements IForm<M>{
  onSubmit(actionType: string): void {
    throw new Error("Method not implemented.");
  }
  abstract handleSubmit(value: any):void
}
