import React from 'react';
import { DocumentNode } from 'graphql';

export interface FCWithFragments<T = Record<string, never>> extends React.FC<T> {
  fragments: Record<string, DocumentNode>;
}