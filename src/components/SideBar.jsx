import React from "react";
import { categories } from "../utils/constants";
import { Button, Stack } from "@mui/material";

function SideBar({ selectedCategory, setselectedCategory }) {

  const handleCategorySelection = (category) => {
    console.log("category", category);
    setselectedCategory(category);
  };

  return (
    <Stack p={2} sx={{ borderRight: "2px solid green" }}>
      {categories?.length > 0 &&
        categories.map((item) => {
          return (
            <Button
              className="category"
              key={item?.name}
              style={{
                background: item.name === selectedCategory && "red",
                color: item.name === selectedCategory && "white",
              }}
              onClick={() => handleCategorySelection(item.name)}
            >
              <span
                style={{
                  color: item.name === selectedCategory && "yellow",
                }}
              >
                {item.icon}
              </span>
              <span>{item?.name}</span>
            </Button>
          );
        })}
    </Stack>
  );
}

export default SideBar;
