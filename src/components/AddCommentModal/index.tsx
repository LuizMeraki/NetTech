import { Input } from "../Input";
import { useState, useEffect } from 'react';
import { TextArea } from "../TextArea";
import { Label } from "../Label";
import { FormEvent } from 'react';
import { FormButton } from '../FormButton/index';
import { Dispatch, SetStateAction } from 'react';
import { handleScroll } from "../../utils/handleScroll";
import { IoIosCloseCircle } from "react-icons/io";
import { addCommentService } from '../../services/addCommentService';

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "./style.module.css";


interface Props {
  showModalState: Dispatch<SetStateAction<boolean>>;
  productId: string | undefined;
}


export const AddCommentModal = ({ showModalState, productId }: Props) => {

  const { addComment, loading, error } = addCommentService();

  const [commentTitle, setCommentTitle] = useState<string>("");
  const [comment, setComment] = useState<string>("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = {
      title: commentTitle,
      content: comment,
    }

    addComment(data, productId);

    if (!error) {
      toast("Your comment has been added");
      showModalState(false);

    } else {
      toast(error);
    }
  }

  useEffect(() => {

    handleScroll(true);
    return () => handleScroll(false);

  }, []);


  return (
    <div className={`${styles.overlay} container-padding`}>
      <div className={styles.container}>
        <div className={styles.closeModal} onClick={() => showModalState(false)}>
          <IoIosCloseCircle />
        </div>
        <form onSubmit={handleSubmit}>
          <Label label="Title">
            <Input
              type="text"
              value={commentTitle}
              setState={setCommentTitle}
              placeholder="Comment title"
              required={true}
              minLength={3}
              maxLength={15}
            />
          </Label>
          <Label label="Comment">
            <TextArea
              value={comment}
              setState={setComment}
              placeholder="Comment about product"
              required={true}
              minLength={3}
              maxLength={200}
            />
          </Label>
          <div className="form-actions">
            <FormButton>Comment</FormButton>
          </div>
        </form>
      </div>
    </div>
  )
}