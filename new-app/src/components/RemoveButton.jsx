function RemoveButton(props) {
  function handler() {
    // console.log(props.sendStudentInfo);
    props.getStudentInfo(props.sendStudentInfo);
  }
  return (
    <>
      <button onClick={handler}>X</button>
    </>
  );
}

export default RemoveButton;
