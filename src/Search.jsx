import React from "react";

function Search(props) {
  return (
    <>
      <div class="input-group rounded">
        <input
          type="search"
          class="form-control rounded"
          placeholder="Search"
          onChange={(e) => {
            return props.searchfun(e.target.value);
          }}
          aria-label="Search"
          aria-describedby="search-addon"
        />
        <span class="input-group-text border-0" id="search-addon">
          <i class="fas fa-search"></i>
        </span>
      </div>
      <select
        class="browser-default custom-select"
        onChange={(e) => {
          return props.filterfun(e.target.value);
        }}
      >
        <option selected value="0-40">
          select Price
        </option>
        <option value="0-10">0-10</option>
        <option value="10-20">11-20</option>
        <option value="20-40">21-40</option>
      </select>{" "}
    </>
  );
}

export default Search;
