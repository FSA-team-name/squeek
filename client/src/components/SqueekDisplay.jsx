import ReSqueek from "./ReSqueek"

const SqueekDisplay = ({ squeek }) => {
  return (
        <section className="flex-auto flex-col my-4 mx-2 p-4 justify-center bg-toothwhite shadow-md rounded-s ">
          {/* name and pic and hr */}
          <section className="flex justify-between items-center">
            <section className="flex justify-start py-1 items-center">
              <section className="flex box-border h-12 w-12 border-2 border-cheeseyellow items-center overflow-hidden rounded-full">
                <img className="h-full" src={squeek.author.photo} />
              </section>
              <h2 className="px-2 font-bold text-earlgrey text-lg">
                {squeek.author.firstName}
              </h2>
              <h3 className="text-cheeseyellow font-small">
                @{squeek.author.username}
              </h3>
            </section>
            <section>
              <p>2h</p>
            </section>
          </section>
          <section className="py-2">
            <p className="font-medium text-earlgrey">{squeek.text}</p>
          </section>
          {squeek.reSqueekId ? (
            <section className="m-4">
              <ReSqueek squeekID={squeek.reSqueekId} />
            </section>
          ) : null}
          <section className="border-t-2 border-t-cheeseyellow"></section>
          <section className="text-xs text-earlgrey py-1">
            <p>{squeek.dateTimeCreated}</p>
          </section>
        </section>
  )
}

export default SqueekDisplay