function Header(props) {
  return (
    <div className="header">
      <div>Students</div>
      <button onClick={props.Sort}>Sort</button>
      <div>{props.totalStudents}</div>
    </div>
  );
}

export default Header;
