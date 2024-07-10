const GetSinglePokemon = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

const GetData = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

const GetPokeInfo = async (getUrl) => {
  const data = await fetch(getUrl)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });

  if (!data.results) {
    return {
      next: null,
      previous: null,
      array: [
        {
          name: data.name,
          image: data.sprites.other.dream_world.front_default,
          id: data.id,
        },
      ],
    };
  }

  const results = data.results.map((item) => ({
    name: item.name,
    url: item.url,
  }));

  const pokeInfoArray = await Promise.all(
    results.map(async (item) => {
      const urlStrArr = item.url.split("/");
      const id = urlStrArr[urlStrArr.length - 2];
      const response = await fetch(item.url);
      const res = await response.json();
      return {
        name: item.name,
        image: res.sprites.other.dream_world.front_default,
        id: id,
      };
    })
  );

  const pokeInfo = {
    next: data.next,
    previous: data.previous,
    array: pokeInfoArray,
  };

  return pokeInfo;
};

const GetAllUrl = (getFunction) => {
  return getFunction().then((data) => {
    return data.results.map((item) => item.url);
  });
};

export { GetSinglePokemon, GetData, GetPokeInfo, GetAllUrl };
