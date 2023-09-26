import { useDispatch, useSelector } from "react-redux";
import { setReplyModal, setReSqueekModal } from "../../redux/modalSlice";
import { Link } from "react-router-dom";
import ReSqueek from "./ReSqueek";
import DislikeInactive from "./DislikeInactive";
import DislikeActive from "./DislikeActive";
import LikeInactive from "./LikeInactive";
import LikeActive from "./LikeActive";
import FavoritesButton from "./FavoritesButton";
import { useState } from "react";

const SqueekDisplay = ({ squeek, userProfile }) => {
  if (!squeek) return null;
  const token = useSelector((state) => state.userToken.token);
  const userId = useSelector((state) => state.userToken.id);
  const squeekURL = `/squeeks/${squeek.id}`;
  const dispatch = useDispatch();

  const sendReaction = async (reaction) => {
    try {
      const response = await fetch(`/api/reactions/${squeek.id}`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ like: reaction }),
      });
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const createFavorite = async () => {
    try {
      const response = await fetch(`/api/favorites/fav/${squeek.id}`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const activeHandler = async (reaction) => {
    // const response = await sendReaction(reaction);
    // squeek.reactions.push(reaction);
    console.log(reaction);
  };

  const inactiveHandler = async (reaction) => {
    const response = await sendReaction(reaction);
    // squeek.reactions.push(reaction);
    console.log("from inactive handler", response);
  };

  return (
    <>
      <section className="flex-auto flex-col my-4 mx-2 p-4 justify-center border-2 border-accent-1 bg-comp shadow-md rounded-lg ">
        {/* name and pic and hr */}
        <section className="flex justify-between items-center">
          <section className="flex justify-start py-1 items-center">
            <section className="flex box-border h-12 w-12 border-2 border-accent-1 items-center overflow-hidden rounded-full">
              <img className="h-full" src={squeek.author.photo} />
            </section>
            <section className="flex ml-2 bg-accent-1 rounded-s-sm">
              <h2 className="px-1 font-bold text-content text-lg">
                {squeek.author.firstName}
              </h2>
            </section>
            <Link
              to={`/users/${squeek.author.username}`}
              onClick={() => userProfile(squeek.author.username)}
              className="px-1 font-bold text-content text-lg"
            >
              @{squeek.author.username}
            </Link>
          </section>
          {/* <section>
          <p>2h</p>
        </section> */}
        </section>
        <Link to={squeekURL}>
          <section className="py-2">
            <p className="whitespace-pre-line font-medium text-content">
              {squeek.text}
            </p>
          </section>
        </Link>
        {squeek.reSqueekId ? (
          <section className="m-4">
            <ReSqueek squeekID={squeek.reSqueekId} />
          </section>
        ) : null}
        <section className="border-t-2 border-t-accent-1"></section>
        <section className="text-xs text-content py-1">
          <p>{squeek.dateTimeCreated}</p>
        </section>
        <section className="flex gap-x-6 flex-row">
          {squeek.reactions ? (
            squeek.reactions.find(
              ({ authorId, like, dislike }) =>
                authorId === userId && like === true && dislike === false
            ) ? (
              <LikeActive activeHandler={activeHandler} />
            ) : (
              <LikeInactive inactiveHandler={inactiveHandler} />
            )
          ) : null}
          {squeek.reactions.find(
            ({ authorId, like, dislike }) =>
              authorId === userId && like === false && dislike === true
          ) ? (
            <DislikeActive />
          ) : (
            <DislikeInactive inactiveHandler={inactiveHandler} />
          )}
          {/* <Link to={squeekURL}> */}
          <section
            onClick={() => dispatch(setReplyModal({ squeek: squeek }))}
            className="flex cursor-pointer bg-accent-2 hover:bg-bkg items-center justify-center rounded-md w-8 h-8 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="fill-amber-200 w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M5.337 21.718a6.707 6.707 0 01-.533-.074.75.75 0 01-.44-1.223 3.73 3.73 0 00.814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 01-4.246.997z"
                clipRule="evenodd"
              />
            </svg>
          </section>
          {/* </Link> */}
          <section
            onClick={() => dispatch(setReSqueekModal({ squeek: squeek }))}
            className="flex cursor-pointer bg-accent-2 hover:bg-bkg items-center justify-center rounded-md w-8 h-8 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="fill-accent-1 w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M12 5.25c1.213 0 2.415.046 3.605.135a3.256 3.256 0 013.01 3.01c.044.583.077 1.17.1 1.759L17.03 8.47a.75.75 0 10-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 00-1.06-1.06l-1.752 1.751c-.023-.65-.06-1.296-.108-1.939a4.756 4.756 0 00-4.392-4.392 49.422 49.422 0 00-7.436 0A4.756 4.756 0 003.89 8.282c-.017.224-.033.447-.046.672a.75.75 0 101.497.092c.013-.217.028-.434.044-.651a3.256 3.256 0 013.01-3.01c1.19-.09 2.392-.135 3.605-.135zm-6.97 6.22a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.752-1.751c.023.65.06 1.296.108 1.939a4.756 4.756 0 004.392 4.392 49.413 49.413 0 007.436 0 4.756 4.756 0 004.392-4.392c.017-.223.032-.447.046-.672a.75.75 0 00-1.497-.092c-.013.217-.028.434-.044.651a3.256 3.256 0 01-3.01 3.01 47.953 47.953 0 01-7.21 0 3.256 3.256 0 01-3.01-3.01 47.759 47.759 0 01-.1-1.759L6.97 15.53a.75.75 0 001.06-1.06l-3-3z"
                clipRule="evenodd"
              />
            </svg>
          </section>
          <FavoritesButton createFavorite={createFavorite}/>
        </section>
      </section>
    </>
  );
};

export default SqueekDisplay;
