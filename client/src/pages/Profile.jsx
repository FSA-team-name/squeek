import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import CachedIcon from '@mui/icons-material/Cached';


const Profile = () => {


  return (
    <div className="bg-earlgrey dark:bg-gray-900 w-full">
  <main className="container mx-auto mt-6 p-4">
    <div className="bg-mickeygrey rounded-lg shadow-md border-2 border-cheeseyellow">
      <div className="w-full bg-cover bg-no-repeat bg-center" style={{ height: '200px' }}>
        <img className="opacity-0 w-full h-full" src="https://pbs.twimg.com/profile_banners/2161323234/1585151401/600x200" alt="" />
      </div>

     
      <div className="p-4">
        <div className="relative flex w-full">
        
          <div className="flex flex-1">
            <div style={{ marginTop: '-6rem' }} className="border border-cheeseyellow p-2 rounded-full">
              <div style={{ height: '9rem', width: '9rem' }} className="md rounded-full relative avatar">
                <img style={{ height: '9rem', width: '9rem' }} className="md rounded-full relative" src="https://i.pinimg.com/originals/b1/6a/a2/b16aa2dabe6f941800969e8e10568ff6.png" alt="" />
                <div className="absolute"></div>
              </div>
            </div>
          </div>

          <div className="flex flex-col text-right">
            <button className="flex justify-center max-h-max whitespace-nowrap focus:outline-none focus:ring rounded max-w-max border bg-cheeseyellow text-black hover:bg-cheeseyellow hover:text-black flex items-center hover:shadow-lg font-bold py-2 px-4 rounded-full mr-0 ml-auto">
              Edit Profile
            </button>
          </div>
        </div>

        <div className="bg-gray-200 p-3 rounded-lg">
          <div>
            <h2 className="text-xl leading-6 font-bold text-gray-800">FirstName LastName</h2>
            <p className="text-sm leading-5 font-medium text-gray-600">@someonesusername</p>
          </div>

          <div className="mt-3">
            <p className="text-gray-800 leading-tight mb-2">User Info</p>
          </div>
          <div className="pt-3 flex justify-start items-start w-full divide-x divide-gray-800 divide-solid">
            <div className="text-center pr-3">
              <span className="font-bold text-gray-800">520</span>
              <span className="text-gray-600"> Following</span>
            </div>
            <div className="text-center px-3">
              <span className="font-bold text-gray-800">23.4m </span>
              <span className="text-gray-600"> Followers</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between p-4">
        <a href="#" className="text-blue-500 hover:underline">Squeeks</a>
        <a href="#" className="text-blue-500 hover:underline">Nibbles</a>
      </div>
      <hr className="border-b-2 border-gray-800" />

      <section className="mt-4">
        <div className="bg-gray-100 p-4 rounded-lg shadow-lg"> 
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex space-x-4">
              <img
                src="https://i.pinimg.com/originals/b1/6a/a2/b16aa2dabe6f941800969e8e10568ff6.png"
                alt="Author"
                className="w-12 h-12 rounded-full"
              />
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <h2 className="text-lg font-semibold">Author Name</h2>
                  <p className="text-gray-500">@authorusername</p>
                  <p className="text-gray-500">• 2h ago</p>
                </div>
                <p className="text-gray-800 dark:text-gray-200">
                  Sample squeek
                </p>
                <div className="flex justify-between mt-4">
                  <div className="flex space-x-4">
                    <button className="text-gray-500 hover:text-blue-400">
                      <FavoriteIcon sx={{ fontSize: 20 }} />
                      <span className="text-sm">100</span>
                    </button>
                    <button className="text-gray-500 hover:text-blue-400">
                      <CommentIcon sx={{ fontSize: 20 }} /> 
                      <span className="text-sm">10</span>
                    </button>
                    <button className="text-gray-500 hover:text-blue-400">
                      <CachedIcon sx={{ fontSize: 20 }} />
                      <span className="text-sm">5</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</div>
  );
}

export default Profile;