const ReplyDisplay = ({ reply }) => {
  return (
    <section className=" mx-14 p-4 justify-center my-1 rounded-md bg-toothwhite border-2 border-cheeseyellow">
                {/* name and pic and hr */}
                <section className="flex justify-between items-center">
                  <section className="flex justify-start py-1 items-center">
                    <section className="flex box-border h-12 w-12 border-2 border-cheeseyellow items-center overflow-hidden rounded-full">
                      <img className="h-full" src={reply.author.photo} />
                    </section>
                    <h2 className="px-2 font-bold text-earlgrey text-lg">
                      {reply.author.firstName}
                    </h2>
                    <h3 className="text-cheeseyellow font-small">
                      @{reply.author.username}
                    </h3>
                  </section>
                  <section>
                    <p>2h</p>
                  </section>
                </section>
                <section className="py-2">
                  <p className="whitespace-pre-line font-medium text-earlgrey">
                    {reply.text}
                  </p>
                </section>
                <section className="border-t-2 border-t-cheeseyellow"></section>
                <section className="text-xs text-earlgrey py-1">
                  <p>{reply.dateTimeCreated}</p>
                </section>
              </section>
  )
}

export default ReplyDisplay