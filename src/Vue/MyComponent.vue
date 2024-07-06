<template>
    <div class="overflow-x-auto bg-blue-300">
      <div class="my-5"></div>
      <table class="min-w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr class="bg-gray-800 text-white uppercase text-sm leading-normal">
            <th class="py-3 px-6 text-left">Number</th>
            <th class="py-3 px-6 text-left">Name</th>
            <th class="py-3 px-6 text-left">Price</th>
          </tr>
        </thead>
        <tbody class="text-gray-700 text-sm font-light">
          <tr v-for="person in people" :key="person.id" class="border-b border-gray-200 hover:bg-gray-100">
            <td class="py-3 px-6 text-left whitespace-nowrap">{{ person.name }}</td>
            <td class="py-3 px-6 text-left">{{ person.age }}</td>
            <td class="py-3 px-6 text-left">{{ person.occupation }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        people: [
          { id: 1, name: 'John Doe', age: 28, occupation: 'Engineer' },
          { id: 2, name: 'Jane Smith', age: 34, occupation: 'Designer' },
          { id: 3, name: 'Sam Johnson', age: 45, occupation: 'Manager' },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  table {
    border-collapse: separate;
    border-spacing: 0 10px;
  }
  
  th {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  
  td {
    background-color: #fff;
  }
  
  tr:hover td {
    background-color: #f3f4f6;
  }
  </style>
  