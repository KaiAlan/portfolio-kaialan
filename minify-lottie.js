const fs = require("fs");
const lottieMinifyModule = require("lottie-minify");
const lottieMinify = lottieMinifyModule.default || lottieMinifyModule;

const inputPath = "./input.json";
const outputPath = "./output.min.json";

try {
  const inputData = JSON.parse(fs.readFileSync(inputPath, "utf8"));
  const minifiedData = lottieMinify.lottieMinify(inputData); // or just call lottieMinify if it is function
  fs.writeFileSync(outputPath, JSON.stringify(minifiedData, null, 2));
  console.log(`Minification complete. Output saved to ${outputPath}`);
} catch (error) {
  console.error("Error during minification:", error);
}
