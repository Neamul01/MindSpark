"use client";
import {
  Button,
  Checkbox,
  FileInput,
  Label,
  TextInput,
  Textarea,
} from "flowbite-react";
import React, { ChangeEvent, useState } from "react";
import H2Heading from "../Common/H2Heading/H2Heading";
import { usePostContext } from "@/contexts/UploadPosts";

export default function AddPost() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    file: null as File | null,
    like: 0,
  });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { posts, addPost } = usePostContext();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "file") {
      const fileInput = e.target as HTMLInputElement;
      const files = fileInput.files;

      if (files && files.length > 0) {
        setFormData((prevData) => ({
          ...prevData,
          file: files[0],
        }));
        // Display the selected image preview
        const reader = new FileReader();
        reader.onload = (event) => {
          setSelectedImage(event.target!.result as string);
        };
        reader.readAsDataURL(files[0]);
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formDataToSend: any = {};
    formDataToSend["description"] = formData.description;
    // ("description", formData.description);
    formDataToSend["title"] = formData.title;
    console.log(formData.file);
    if (formData.file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        // Read the image as base64 and add it to the formDataToSend
        const imageBase64 = event.target!.result as string;
        formDataToSend["image"] = imageBase64;

        addPost(formDataToSend);
        console.log(formDataToSend, "inside if");
      };
      reader.readAsDataURL(formData.file);
    } else {
      addPost(formDataToSend);
      console.log(formDataToSend, "inside else");
    }
  };

  return (
    <div className="w-full">
      <div>
        <H2Heading position="center" text="Add Post" />
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label className="font-bold" htmlFor="title" value="Title" />
          </div>
          <TextInput
            id="title"
            placeholder="Write title here..."
            required
            type="text"
            name="title"
            onChange={handleChange}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              className="font-bold"
              htmlFor="description"
              value="Write description"
            />
          </div>
          <Textarea
            id="description"
            placeholder="Write full description here..."
            name="description"
            onChange={handleChange}
            rows={5}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="file" value="Upload file" />
          </div>
          <FileInput
            name="file"
            helperText="Upload picture for your post"
            id="file"
            accept="image/*"
            onChange={handleChange}
          />
        </div>
        <Button type="submit">Submit</Button>
        {selectedImage && (
          <div className="mt-4 w-40 h-40">
            <h2 className="font-bold mb-2">Selected Image Preview:</h2>
            <img src={selectedImage} alt="Selected" className="max-w-full" />
          </div>
        )}
      </form>
    </div>
  );
}
