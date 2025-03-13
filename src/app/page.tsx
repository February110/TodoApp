'use client';
import React, { useState } from 'react';

const Page = () => {
    const [userInput, setUserInput] = useState('');
    const [list, setList] = useState<{ id: number; value: string; completed: boolean }[]>([]);
    const [editIndex, setEditIndex] = useState<number | null>(null);

    const updateInput = (value: string) => {
        setUserInput(value);
    };

    const handleAction = () => {
        if (userInput.trim() === '') return;

        if (editIndex !== null) {
            const updatedList = list.map((item, index) =>
                index === editIndex ? { ...item, value: userInput } : item
            );
            setList(updatedList);
            setEditIndex(null);
        } else {
            const newItem = {
                id: Math.random(),
                value: userInput,
                completed: false,
            };
            setList([...list, newItem]);
        }

        setUserInput('');
    };

    const deleteItem = (id: number) => {
        setList(list.filter((item) => item.id !== id));
    };

    const startEdit = (index: number) => {
        setUserInput(list[index].value);
        setEditIndex(index);
    };

    const toggleCompletion = (id: number) => {
        setList(list.map(item => item.id === id ? { ...item, completed: !item.completed } : item));
    };

    return (
        <div className="max-w-lg mx-auto p-6 font-sans">
            <div className="flex items-center mb-4">
                <input
                    className="flex-grow p-3 text-lg border rounded-md border-gray-300 mr-2 text-black"
                    placeholder={editIndex !== null ? 'Edit item...' : 'Thêm mới công việc...'}
                    value={userInput}
                    onChange={(e) => updateInput(e.target.value)}
                />
                <button
                    className="p-3 text-lg bg-green-500 text-white rounded-lg"
                    onClick={handleAction}
                >
                    {editIndex !== null ? 'Cập nhật' : 'Thêm'}
                </button>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
                {list.length > 0 ? (
                    list.map((item, index) => (
                        <div
                            key={item.id}
                            className="flex justify-between items-center mb-3"
                        >
                            <input
                                type="checkbox"
                                checked={item.completed}
                                onChange={() => toggleCompletion(item.id)}
                                className="mr-2"
                            />
                            <span
                                className={`text-lg flex-grow ${item.completed ? 'text-red-500 line-through' : 'text-black'}`}
                            >
                                {item.value}
                            </span>
                            <div>
                                <button
                                    className="p-2 bg-red-500 text-white rounded-lg mr-2"
                                    onClick={() => deleteItem(item.id)}
                                >
                                    Xóa
                                </button>
                                <button
                                    className="p-2 bg-blue-500 text-white rounded-lg"
                                    onClick={() => startEdit(index)}
                                >
                                    Sửa
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-lg text-gray-600">Hiện không có công việc nào</p>
                )}
            </div>
        </div>
    );
};

export default Page;
