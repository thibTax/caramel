type props = {
  img: string;
  marque: string;
  modele: string;
  annee: number;
  km: number;
  assureur: string;
};

function CarDetails(props: props) {
  return (
    <div>
      <h1>title</h1>
      <div>
        <div className="flex">
          <img src={props.img} alt="img from vehicule" />
          <p>
            {props.marque} &bull; {props.modele}
          </p>
          <p>Année de sortie {props.annee}</p>
          <p>{props.km} km</p>
          <p>Assurer chez {props.assureur}</p>
        </div>
        <div>grand tableau de la spec</div>
      </div>
    </div>
  );
}
export default CarDetails;
