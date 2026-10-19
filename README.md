## How to add / change the photos

For Aileen :)

### Prerequisites

- Get a GitHub account, and log in
- Have your images ready to go and optimised for the web
  - Check the size of these images. If they're over 1MB per image that is too much!
  - You can optimise the images for web by running it through [ImageOptim](https://imageoptim.com/), or resizing it to be smaller, or both. If both, run ImageOptim last.
- The instructions below allow you to change the images without previewing them locally first. If you want to preview them locally before putting it online, I can write a different set of instructions (it's a little more involved).

### Changing the photos

1. Upload files to the `/img/` folder of the repository [here](https://github.com/heisenburger/aileen-chen-dot-com/upload/main/img). When you're done, add a description if you'd like and click the "Commit changes" button.
2. Open up [`index.html`](https://github.com/heisenburger/aileen-chen-dot-com/edit/main/index.html). At the top of the file you will see a list of samples, like so:
  
  ```
  samples: 
    - HeatherRose-16
    - IMG_3771
    - NikkiCrerar-Test-LowRes-AC-27
    - HeatherRose-4
    - EmmaLewisham-AC-9
    - RoyGood-Autumn26-7
    - RoyGood-Autumn26-13
    - Natasha-Film-AC-14-X
    - ELAENA-TEST-AC-19
    - MIA-COLLECTION-9-AC-08
  ```
  
  This is the list of photos displayed in the carousel, and the order they are displayed in. Note that these should match the filename of the images, except for the `.jpg`.

  To change the photos, delete, add, or reorder the image filenames as you wish. Make sure they match the filename exactly, including whether letters are uppercase or lowercase.

  Click the green "Commit changes" button on the top right of the page when you're done.

3. Now count the number of images you have. [Edit the variables file here](https://github.com/heisenburger/aileen-chen-dot-com/edit/main/_sass/_vars.scss). At the bottom of this file you will see `$number-of-imgs:` — update the number here to the current number of images you have. You can also update the `$seconds-per-img:` variable if you want. Once you're done, hit the "Commit changes" button at the top right of the page.

That's all, folks! You should be done! Congrats you just updated your website :)
