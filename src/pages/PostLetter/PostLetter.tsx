import { Box, Button, Stack } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  POSTLETTER_COLUMNS,
  POSTLETTER_COLUMN_ORDER,
} from "../../components/Grid/Letter/LetterColumns";
import { filterLetters } from "../../components/Grid/Letter/LetterFilter";
import LettersList from "../../components/Grid/LettersList";
import { getAllPostLetters } from "../../store/postLetter/thunk";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import FailedLoader from "../../components/FailedLoader/FailedLoader";

const PostLetter = () => {
  const dispatch = useAppDispatch();
  const letters = useAppSelector((state) => state.postLetter);

  useEffect(() => {
    dispatch(getAllPostLetters());
  }, []);

  return (
    <Stack>
      {letters.error != null && (
        <FailedLoader
          title="Ошибка"
          message="Сервер не отвечает"
          strongMessage="повторите запрос позже!"
        />
      )}
      {!letters.isLoading && letters.error === null && (
        <>
          <Box>
            <Link to="../addletter" color="primary">
              <Button variant="outlined">Добавить отправление</Button>
            </Link>
          </Box>
          <LettersList
            columns={POSTLETTER_COLUMNS}
            data={letters.postLetters}
            filter={filterLetters}
            style={{ height: "75vh" }}
            LocalStorageKey="postLetter"
            columnOrderDefault={POSTLETTER_COLUMN_ORDER}
          />
        </>
      )}
    </Stack>
  );
};

export default PostLetter;
