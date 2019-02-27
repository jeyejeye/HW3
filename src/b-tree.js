function BSTree() {
    this.root = null;

    this.length = 0;
}

BSTree.prototype.insert = function (value) {
	if (arguments.length == 0) {
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
	if (arguments.length == 0) {
		return null;
	}
	
	if (!this.root) {
		return null;		
	}
	
	let entry = this.root.find(value) 
	if (!entry) {
		return null;
	}

	if (this.root != entry) {
//		entry.remove();
	} else {
		
	}
	this.length--

};

BSTree.prototype.find = function (value) {
	if (arguments.length == 0) {
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
            } else {
                this.insert(entry.left);
            }
        } else {
            if (!entry.right) {
                entry.right = this;
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
			this.left.getMin();
		} else {
			return this;
		}
	}
	
	this.getMax = function () {
		if (this.right) {
			this.right.getMax();
		} else {
			return this;
		}
	}
}
