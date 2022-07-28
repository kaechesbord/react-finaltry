import "./comp.css";
import "bootstrap/dist/css/bootstrap.min.css";
const MovieDetails = (props) => {

  function cancelbtnClose() {
    props.onCancel();
  }
  function confirmbtnClose() {
    props.onConfirm();
  }

  return (
  <div className="yes-modal">
    <h1 className="title">{props.titles}</h1>
    <button type="button" class="btn btn-outline-danger mx-5" onClick={cancelbtnClose}>Cancel</button>
    <button type="button" class="btn btn-outline-success mx-5" onClick={confirmbtnClose}>Confirm</button>
  </div>
  );
};
export default MovieDetails;
