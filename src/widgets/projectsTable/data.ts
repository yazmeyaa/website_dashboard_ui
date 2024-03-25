import { Project } from "../../shared/api/types";

export const columns = [
  { name: "id", uid: "id" },
  { name: "name", uid: "name" },
  { name: "description", uid: "description" },
  { name: "href", uid: "href" },
  { name: "img", uid: "img" },
  { name: "githubUrl", uid: "githubUrl" },
  { name: "actions", uid: "actions" },
];

export const data: Project[] = [
    {
        description: "Hello world",
        id: "1",
        img: "blah",
        name: "Oyy Yeahhh",
        githubUrl: "Github url? Yes.",
        href: "tired"
    },
    {
        description: "Hello world",
        id: "12",
        img: "blah",
        name: "Oyy Yeahhh",
        githubUrl: "Github url? Yes.",
        href: "tired"
    },
    {
        description: "Hello world",
        id: "13",
        img: "blah",
        name: "Oyy Yeahhh",
        githubUrl: "Github url? Yes.",
        href: "tired"
    },    {
        description: "Hello world",
        id: "14",
        img: "blah",
        name: "Oyy Yeahhh",
        githubUrl: "Github url? Yes.",
        href: "tired"
    },    {
        description: "Hello world",
        id: "15",
        img: "blah",
        name: "Oyy Yeahhh",
        githubUrl: "Github url? Yes.",
        href: "tired"
    }
];
