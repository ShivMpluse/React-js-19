function Profile() {
    return (
      <div>
        <h1>Profile Card Challenge</h1>
        <ProfileCard
          name="Alice"
          age={30}
          greeting={
            <div>
              <strong>Hi Alice, have a wonderful day!</strong>
            </div>
          }
        >
          <p>Hobbies: Reading, Hiking</p>
          <button>Contact</button>
        </ProfileCard>
  
        <ProfileCard
          name="Bob"
          age={25}
          greeting={
            <div>
              <strong>Hello Bob, keep up the great work!</strong>
            </div>
          }
        >
          <p>Hobbies: Gaming, Cooking</p>
          <button>Contact</button>
        </ProfileCard>
      </div>
    );
  }
export default Profile  

function ProfileCard({name, age, greeting, children}){
  return(
    <>
        <div className="container">
            <div className="row m-5 ">
                <div className="col-lg-6 p-3">
                  <h2>Name:{name} </h2>
                  <p><b>Age: </b>{age}</p>
                  <p><b>Greeting: </b>{greeting}</p>
                  <div>{children}</div>
                </div>
            </div>
        </div>
    </>
  )
}