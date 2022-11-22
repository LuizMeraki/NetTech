import { useState } from 'react';
import { IComments } from '../interfaces/Commets';
import axios from "axios";


const API = import.meta.env.VITE_API;
import { requestErrorMessages } from './../constants/requestErrorMessages';


export const useFetchComments = () => {

  const [comments, setComments] = useState<IComments | null>(null);

  const [commentLoading, setCommentLoading] = useState<boolean>(false);
  const [commentError, setCommentError] = useState<string | null>(null);

  async function fetchComments(productID: string | undefined) {

    setCommentLoading(true);
    setCommentError(null);

    try {

      const request: any = await axios.get(`${API}/getallcomentsfromproduct/${productID}`);

      setComments(request)

    } catch (error) {

      setCommentLoading(false);
      setCommentError(requestErrorMessages.genericError);
    }

    setCommentLoading(false)
  }

  return ({ fetchComments, comments, commentLoading, commentError })
}