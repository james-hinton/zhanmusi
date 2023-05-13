export const retrieveFossilsForBoundingBox = async (boundingBox) => {
  console.log("Retrieving fossils for bounding box", boundingBox);
  // https://paleobiodb.org/data1.2/occs/list.json?lngmin=-0.51&lngmax=0.33&latmin=51.28&latmax=51.68
  if (!checkBoundingBoxSize(boundingBox)) {
    return {
      status: "error",
      message: "Bounding box too large",
    };
  }

  const url = `https://paleobiodb.org/data1.2/occs/list.json?lngmin=${boundingBox.lngmin}&lngmax=${boundingBox.lngmax}&latmin=${boundingBox.latmin}&latmax=${boundingBox.latmax}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log("Fossils retrieved", data);
  return {
    status: "success",
    data: data.records,
  };
};

const checkBoundingBoxSize = (boundingBox) => {
  const lngDiff = boundingBox.lngmax - boundingBox.lngmin;
  const latDiff = boundingBox.latmax - boundingBox.latmin;
  if (lngDiff > 1 || latDiff > 1) {
    console.log("Bounding box too large, returning");
    return false;
  }
  return true;
};

// interface boundingBox {
//   lngmin: number;
//   lngmax: number;
//   latmin: number;
//   latmax: number;
// }
