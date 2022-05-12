function Header(props) {
  return (
    <div className="header">
      <div>Students</div>
      <div>{props.totalStudents}</div>
    </div>
  );
}

export default Header;
