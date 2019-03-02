function BSTree() {
    this.root = null;

    this.length = 0;
}

BSTree.prototype.insert = function (value) {
	if (arguments.length === 0) {
		return this.length;
	}

    const entry = new Entry(value);

    if (!this.root) {
        this.root = entry;
    } else {
        entry.insert(this.root);
    }

    return ++this.length;
};

BSTree.prototype.remove = function (value) {	
	if (arguments.length === 0) {
		return null;
	}
	
	if (!this.root) {
		return null;		
	}
	
	let entry = this.root.find(value);
	if (!entry) {
		return null;
	}

	this.length--;
	if (this.root !== entry) {
		return entry.remove();
	} else {
		if (!this.root.left && !this.root.right) {
			this.root = null;
			return null;
		} else {
			const mockRoot = new Entry();
			mockRoot.left = this.root;
			this.root = this.root.remove();
			return this.root;
		}		
	}
};

BSTree.prototype.find = function (value) {
	if (arguments.length === 0) {
		return null;
	}
	
    if (!this.root) {
        return null;
    } else {
        let entry = this.root.find(value);
        if (entry) {
            return entry;
        } else {
            return null;
        }
    }
};

BSTree.prototype.toString = function () {
    let res = '{';

    if (this.root) {
        this.root.toOrder((value) => res += value + ', ');
		res = res.slice(0, -2);
    }

    res += '}';

    return res;
};

BSTree.prototype.toArray = function () {
    let res = [];

    if (this.root) {
        this.root.toOrder((value) => res.push(value) );
    }

    return res;
};

BSTree.prototype.empty = function () {
    this.root = null;

    this.length = 0;

    return this.length;
};

BSTree.prototype.toLinkedList = function () {
    const res = new LList1();

    if (this.root) {
        this.root.toOrder((value) => res.push(value));
    }

    return res;
};

function Entry(value) {
    this.parent = null;

    this.value = value;

    this.left = null;
    this.right = null;

    this.insert = function(entry) {
        if (this.value < entry.value) {
            if (!entry.left) {
                entry.left = this;
				this.parent = entry;
            } else {
                this.insert(entry.left);
            }
        } else {
            if (!entry.right) {
                entry.right = this;
				this.parent = entry;				
            } else {
                this.insert(entry.right);
            }
        }
    };

    this.find = function(value) {
        if (this.value === value) {
            return this;
        } else {
            if (this.value > value) {
                if (!this.left) {
                    return null;
                } else {
                    return this.left.find(value);
                }
            } else {
                if (!this.right) {
                    return null;
                } else {
                    return this.right.find(value);
                }
            }
        }
    };

    this.toOrder = function(callback) {
        if (this.left) {
            this.left.toOrder(callback);
        }

        callback(this.value);

        if (this.right) {
            this.right.toOrder(callback);
        }
    };
	
	this.getMin = function () {
		if (this.left) {
			return this.left.getMin();
		} else {
			return this;
		}
	};
	
	this.getMax = function () {
		if (this.right) {
			return this.right.getMax();
		} else {
			return this;
		}
	};
	
	this.remove = function () {
		if (this.parent.left === this) {
			//левое удаление
			if (!this.left && !this.right) {
				this.parent.left = null;
				return null;
			} else if (this.left && !this.right) {
				this.parent.left = this.left;
				this.left.parent = this.parent;
				return this.left;
			} else if (!this.left && this.right) {
				this.parent.right = this.right;
				this.right.parent = this.parent;
				return this.right;
			} else {
				const entry = this.right.getMin();
				if (this.right === entry) {
					if (this.left) {
						this.left.parent = entry;
						entry.left = this.left;
						return entry;
					}
					this.parent.left = entry;
					entry.parent = this.parent;
					return entry;
				} else {
					if (entry.right) {
						entry.parent.left = entry.right;
						entry.right.parent = entry.parent;
					}
					entry.left = this.left;
					entry.right = this.right;
					return entry;
				}
			}
		} else {
			// правое удаление
			if (!this.left && !this.right) {
				this.parent.right = null;
				return null;
			} else if (this.right && !this.left) {
				this.parent.right = this.right;
				this.right.parent = this.parent;
				return this.right;
			} else if (!this.right && this.left) {
				this.parent.right = this.left;
				this.left.parent = this.parent;
			} else {
				const entry = this.left.getMax();
				if (this.left === entry) {
					if (this.right) {
						this.right.parent = entry;
						entry.right = this.right;
						return entry;
					}
					this.parent.right = entry;
					entry.parent = this.parent;
					return entry;
				} else {
					if (entry.left) {
						entry.parent.right = entry.left;
						entry.left.parent = entry.parent;
					}
					entry.right = this.right;
					entry.left = this.left;
					return entry;
				}
			}
		}
	}
}
