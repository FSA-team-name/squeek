import { Link } from "react-router-dom";


const ReplyDisplay = ({ reply }) => {
  const squeekURL = `/squeeks/${reply.squeekId}`;

                              
  return (
    <Link to={squeekURL}>
    <section className=" mx-14 p-4 justify-center my-1 rounded-md bg-comp border-2 border-accent-1">
                {/* name and pic and hr */}
                <section className="flex justify-between items-center">
                  <section className="flex justify-start py-1 items-center">
                    <section className="flex box-border h-12 w-12 border-2 border-accent-1 items-center overflow-hidden rounded-full">
                      <img className="h-full" src={reply.author.photo} />
                    </section>
                    <h2 className="px-2 font-bold text-content text-lg">
                      {reply.author.firstName}
                    </h2>
                    <h3 className="text-accent-1 text-sm">
                      @{reply.author.username}
                    </h3>
                  </section>
                  <section>
                    <p>2h</p>
                  </section>
                </section>
                <section className="py-2">
                  <p className="whitespace-pre-line font-medium text-content">
                    {reply.text}
                  </p>
                </section>
                <section className="border-t-2 border-t-accent-1"></section>
                <section className="text-xs text-content py-1">
                  <p>{reply.dateTimeCreated}</p>
                </section>
              </section>
              </Link>
  )
}

export default ReplyDisplay