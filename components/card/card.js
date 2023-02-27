console.clear();

// Funktionsname createCharakterCard
export function createCharacterCard(character) {
  // erstelle neues li item mit klassenname card
  const li = document.createElement("li");
  li.className = "card";

  // erstelle ein neues div mit klassennamen card__image-gradient
  const imageContainer = document.createElement("div");
  imageContainer.className = "card__image-gradient";

  // erstelle ein neues image mit dem Klassennamen card__image
  const image = document.createElement("img");
  image.className = "card__image";

  // image src und alt hinzufügen
  image.src = character.image;
  image.alt = character.name;

  // erstelle neues div mit dem klassennamen card__image-gradient für dioe karte
  const imageGradient = document.createElement("div");
  image.className = "card__image-gradient";

  // einfügen image und imageGradient dem Element imageContainer
  imageContainer.append(image);
  imageContainer.append(imageGradient);

  // erstelle neues div mit gleicher Klasse card__container
  const content = document.createElement("div");
  content.className = "card__content";

  // erstelle neues h2 Element mit Klasse card__title
  // character name = Textinhalt Titel
  const title = document.createElement("h2");
  title.className = "card__title";
  title.textContent = character.name;

  // erstelle neues dl Element mit klasse card__info
  const infoList = document.createElement("dl");
  infoList.className = "card__info";

  // erstelle neues dt Element mit Klasse card__info-title
  // status = Textinhalt
  const statusTitle = document.createElement("dt");
  statusTitle.className = "card__info-title";
  statusTitle.textContent = "Status";

  // erstelle neues dd Element mit Klassennamen card__info-description
  // character status wird gefüllt
  const statusDescription = document.createElement("dd");
  statusDescription.className = "card__info-description";
  statusDescription.textContent = character.status;

  // erstelle neues dt Element mit Klasse card__info-title
  // Type wird hinzugefügt
  const typeTitle = document.createElement("dt");
  typeTitle.className = "card__info-title";
  typeTitle.textContent = "Type";

  // erstelle neues dd Element mit Klasse card__info-description
  // Type wird gefüllt falls vorhanden ist ansonsten bleibt es leer
  const typeDescription = document.createElement("dd");
  typeDescription.className = "card__info-description";
  typeDescription.textContent = character.type || "";

  // erstelle neues dt mit Klasse card__info-title
  // textContent Occurrences
  const occurrencesTitle = document.createElement("dt");
  occurrencesTitle.className = "card__info-title";
  occurrencesTitle.textContent = "Occurrences";

  // erstelle neues dd Element mit Klasse card__info-description
  // character wird auf länge des arrays gesetzt
  const occurrencesDescription = document.createElement("dd");
  occurrencesDescription.className = "card__info-description";
  occurrencesDescription.textContent = character.episode.length;

  // Objekte werden nach der Reihe hinzugefügt mit append
  infoList.append(statusTitle);
  infoList.append(statusDescription);
  infoList.append(typeTitle);
  infoList.append(typeDescription);
  infoList.append(occurrencesTitle);
  infoList.append(occurrencesDescription);

  content.append(title);
  content.append(infoList);

  li.append(imageContainer);
  li.append(content);

  // Mit return Funktion wird beendet und weiter gegeben
  return li;
}
