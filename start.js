var examples = ["Cooling Tower(new)_leftImg8bit.png", "Cooling Tower-1_leftImg8bit.png", "Cooling Tower-2_leftImg8bit.png", "new_leftImg8bit.png", "new2_leftImg8bit.png"]
const prefix_url = "imgs/"

function add_examples()
{
	for (var i=0;i<21;i++)
	{
		examples.push("example" + i + "_leftImg8bit.png")
	}
}

function add_images()
{
	const div_imgs = document.getElementById("image_collection")
	for (const path of examples)
	{
		var new_img = document.createElement("img")
		new_img.src = prefix_url + path + "?csf=1&web"
		new_img.className = "object-fill"
		div_imgs.appendChild(new_img)
		const br = document.createElement("br")
		div_imgs.appendChild(br)
	}
}

add_examples()
add_images()

