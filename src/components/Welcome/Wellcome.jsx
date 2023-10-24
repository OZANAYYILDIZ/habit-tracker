import "./Wellcome.css";

const Wellcome = () => {
  return (
    <>
      <div className="user">
        <img
          className="profile-pic"
          src="https://fastly.picsum.photos/id/780/200/200.jpg?hmac=2eohvtsHnYuBD7aalSWH4h6L6EKelvoFD9TV0Ax1K2A"
          alt="Profile picture"
        />
        <h1 className="username">Ozan Ayyıldız</h1>
      </div>
    </>
  );
};

export default Wellcome;
