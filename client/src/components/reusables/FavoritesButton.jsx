import { useDispatch, useSelector } from "react-redux";
import { setLoginModal } from "../../redux/modalSlice";

const FavoritesButton = ({ createFavorite }) => {
  const token = useSelector((state) => state.userToken.token);
  const dispatch = useDispatch();
  return (
    <section
            onClick={() => token ? createFavorite() : dispatch(setLoginModal())}
            className="flex cursor-pointer bg-earlgrey hover:bg-mickeygrey items-center justify-center rounded-md w-8 h-8 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="fill-sky-500 w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z"
                clipRule="evenodd"
              />
            </svg>
          </section>
  )
}

export default FavoritesButton