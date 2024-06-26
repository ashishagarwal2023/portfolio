"use server";

const getGithubData = async (image: any) => {
  try {
    const imageUrl = image;
    if (!imageUrl.startsWith("https://avatars.githubusercontent.com/u/"))
      return "#";
    const regex = /\/u\/(\d+)\?/;
    const match = imageUrl.match(regex);
    const userID = match ? match[1] : null;
    const response = await fetch(`https://api.github.com/user/${userID}`);
    const data = await response.json(); // https://github.com/ashishagarwal2023
    return data.html_url;
  } catch (error) {
    console.error("Error fetching GitHub data: " + error);
  }
};

export default getGithubData;