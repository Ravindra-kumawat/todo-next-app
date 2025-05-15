// app/components/TodoItem.tsx
'use client';

import { Todo } from '@/types/todo';
import React from 'react';
import styles from './TodoItem.module.css';

interface Props {
  todo: Todo;
  isExpanded: boolean;
  onToggleExpand: (id: string) => void;
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

const MAX_LENGTH = 80;

export default function TodoItem({
  todo,
  isExpanded,
  onToggleExpand,
  onToggleComplete,
  onDelete,
}: Props) {
  const isLong = todo.text.length > MAX_LENGTH;
  const displayText = isExpanded || !isLong
    ? todo.text
    : todo.text.slice(0, MAX_LENGTH) + '...';

  return (
    <div className={styles.todoItem}>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggleComplete(todo.id)}
        />
      </label>
      <span
        className={`${styles.text} ${todo.completed ? styles.completed : ''}`}
      >
        {displayText}
        {isLong && (
          <button
            className={styles.expandBtn}
            onClick={() => onToggleExpand(todo.id)}
          >
            {isExpanded ? ' See less' : ' See more'}
          </button>
        )}
      </span>
      <button onClick={() => onDelete(todo.id)} className={styles.deleteBtn}>
        ❌
      </button>
    </div>
  );
}
