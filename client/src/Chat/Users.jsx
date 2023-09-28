const Users = ({ width }) => {

  // const getUsers = async() => {
    
  // }
  
  if (width > 620) {
    return (
      <section className={`border-r-4 border-accent-1 h-screen col-span-1 bg-innercomp`}>
        <section>
          <h1 className='text-content font-bold pl-5 py-3 text-xl border-b-2 border-comp'>Messages</h1>
        </section>
        <section>

        </section>
      </section>
    )
  } else {
    return (
      <section className={`h-screen col-span-1 bg-innercomp`}>
        <section>
          <h1 className='text-content font-bold pl-5 py-3 text-xl border-b-2 border-comp'>Messages</h1>
        </section>
        <section>

        </section>
      </section>
    )
  }
}

export default Users; 