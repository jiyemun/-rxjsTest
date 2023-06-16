/*
  <input id="search" />
  <ul id="results"></ul>
 */
import { map, fromEvent, debounceTime, pluck, filter } from "rxjs";

let testData = ["문지예", "최성규", "김재경", "한하정", "문지영"];
const searchBox = document.querySelector("#search");
const results = document.querySelector("#results");

const noEmpty = (input: any) => !!input && input.trim().length > 0;

const sendRequest = function (arr: any, query: string) {
  return arr.filter((item: string) => {
    return query.length > 0 && item.startsWith(query);
  });
};

function clearResults(container: any) {
  while (container.childElementCount > 0) {
    container.removeChild(container.firstChild);
  }
}

function appendResults(result: any, container: any) {
  let li = document.createElement("li");
  let text = document.createTextNode(result);
  li.appendChild(text);
  container.appendChild(li);
}

if (searchBox) {
  fromEvent(searchBox, "keyup")
    .pipe(
      debounceTime(1000),
      pluck("target", "value"),
      filter(noEmpty),
      map((query) => sendRequest(testData, query))
    )
    .forEach((result) => {
      clearResults(result);
      appendResults(result, results);
    });
}

const clicks = fromEvent(document, "click");
const tagNames = clicks.pipe(pluck("target", "tagName"));

tagNames.subscribe((x) => console.log(x));
